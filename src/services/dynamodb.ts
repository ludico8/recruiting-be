import AWS from "aws-sdk";

// DynamoDB Config
const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: process.env.AWS_REGION || "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
});

export const addProfile = async (profile: any): Promise<void> => {
  const params = {
    TableName: "Profiles",
    Item: profile,
  };

  try {
    await dynamoDb.put(params).promise();
    console.log("Profile added successfully:", profile);
  } catch (error) {
    console.error("Error adding profile to DynamoDB:", error);
    throw new Error("Could not add profile to DynamoDB.");
  }
};
