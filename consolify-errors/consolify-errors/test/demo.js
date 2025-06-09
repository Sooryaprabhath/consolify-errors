import consolify from '../index.js';

consolify.error("API call failed", { status: 500, endpoint: "/users" });
consolify.warn("Using deprecated function");
consolify.info("Fetching user data...");
consolify.success("Data saved successfully", { id: 123, name: "John" });
