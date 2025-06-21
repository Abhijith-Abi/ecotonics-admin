/* eslint-disable */
export default async function deleteApiData(endpoint: string, data: any) {
    console.log(`DELETing from ${endpoint}`, data);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    // This is a mock response, adjust as needed for your application
    return {
        status_code: 200,
        message: {
            title: "Success",
            body: "Data deleted successfully",
        },
        data: {},
        errors: {},
    };
}
