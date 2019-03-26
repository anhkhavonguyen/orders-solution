const esConnection = require('../../connection/esConnection');

module.exports = {
    queryTerm(term, offset = 0) {
        const body = {
            from: offset,
            query:
            {
                match: {
                    text: {
                        query: term,
                        operator: 'and',
                        fuzziness: 'auto'
                    }
                },
                highlight: { fields: { text: {} } }
            }
        }
        return esConnection.client.search({ index, type, body });
    }
}