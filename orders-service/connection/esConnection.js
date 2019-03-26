const elasticsearch = require('elasticsearch');

const index = 'library';
const type = 'novel';
const port = 9200;
const host = process.env.ES_HOST || 'localhost';
const client = elasticsearch.Client({ host: { host, port } });

async function checkConnection() {
    let isConnected = false;
    while (!isConnected) {
        console.log('Connecting...!');
        try {
            const health = await client.cluster.health({});
            console.log(health);
            isConnected = true;
        } catch (err) {
            console.log(err);
        }
    }
}

async function createIndexAsync(index) {
    if (await client.indices.exists({ index })) {
        await client.indices.delete({ index });
    }

    await client.indices.create({ index });
}

async function putBookMapping() {
    const schema = {
        title: { type: 'keyword' },
        author: { type: 'keyword' },
        location: { type: 'integer' },
        text: { type: 'text' }
    }

    return client.indices.putMapping({ index, type, body: { properties: schema } })
}

async function bulkAsync(indexName, typeName, items) {
    let bulkOptions = [];
    items.forEach(item => {
        bulkOptions.push({ index: { _index: indexName, _type: typeName } });

        bulkOptions.push({
            author: item.author,
            title: item.title,
            location: item.location,
            text: item.text
        });
    });

    await client.bulk({ body: bulkOptions });
}

module.exports = {
    client, index, type, checkConnection, createIndexAsync, bulkAsync
}
