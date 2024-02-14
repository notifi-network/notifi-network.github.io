---
sidebar_position: 4
---

# Using External API's

Fetch APIs will be injected upon startup of your Notifi Hosted routine. You will have access to making API calls to your respective endpoints.

Example as shown below:

````
 const dataBody = {
      query: yourQuery,
      variables: {},
    };

    const response = await FetchUtils.post(fetchProxy, logger, {
      url: {YOUR_URL},
      headers: {},
      body: dataBody,
    });

    if (response.statusCode !== 200) {
      logger.error("Error in get cauldrons response.", {
        response: response.response,
        statusCode: response.statusCode,
      });

      throw new Error("Error in response");
    }

    const responseJson = JSON.parse(response.response);
    ```
````
