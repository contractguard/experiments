module.exports = {
    networks: {
        test: {
            host: "localhost",
            port: 8500,
            network_id: "10", // Match any network id
        }
    },
    compilers: {
        solc: {
            version: "0.4.25"
        }
    }
};
