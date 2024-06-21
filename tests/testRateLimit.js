const axios = require('axios');

async function testRateLimit() {
    for (let i = 0; i < 110; i++) { // 110 requests to exceed the limit
        try {
            const response = await axios.get('http://localhost:5000/api/auth/test');  // Ensure the endpoint is correct
            console.log(`Request ${i + 1}: Status ${response.status}`);
        } catch (error) {
            if (error.response) {
                console.log(`Request ${i + 1}: Status ${error.response.status} - ${error.response.data.message}`);
            } else {
                console.error(`Request ${i + 1}: Error - ${error.message}`);
            }
        }
    }
}

testRateLimit();
