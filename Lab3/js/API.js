const BASE_URL = "http://localhost:8080";
const RESOURCE_URL = `${BASE_URL}/fruit`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null}) => {
    try {
        const requiredParameters = {
            method, 
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        if (body) {
            requiredParameters.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, requiredParameters);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const getAllFruits = async () => {
    const rawResponse = await baseRequest({ method: "GET" });
    
    return await rawResponse.json();
}

export const postFruit = (body) => baseRequest({ method: "POST", body });

export const updateFruit = (id, body) => 
    baseRequest({ urlPath:`/${id}`, method: "PUT", body });

export const deleteFruit = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });
