# How to Set Up a Service Account (For this you need organization account)

1. **Go to your project** in the Google Cloud Console.
2. Navigate to **APIs & Services**.
3. Enable the **Gmail API** by selecting **Enable APIs and Services** and searching for Gmail.
4. After enabling the API, go back to **APIs & Services** and click on **Credentials**.
5. Click on **Create Credentials**, then select **Service Account**.
6. Fill in the details for the service account and click **Continue**.
7. Grant the service account access by assigning it the **Owner** role, then click **Continue** and **Done**.
8. The service account will now be created.
9. Go to the **Credentials** page and find your newly created service account, then navigate to the **Keys** tab.
10. Create a new key, select **JSON** as the key type, and click **Create**.
11. After creating the key, go to **admin.google.com** and sign in to your **Admin account** to access the dashboard.
12. In the Admin Console, go to **Security > Access and Data Controls > API Controls**.
13. Scroll down to **Domain-wide Delegation** and click **Manage Domain-Wide Delegation**.
14. Click **Add New** to open a modal window.
15. Enter the **Client ID** from the JSON file and add the following OAuth scopes:
   - `https://mail.google.com/` (for full Gmail access)
   - `https://www.googleapis.com/auth/gmail.send` (to allow only sending emails)
16. Click **Authorize** to complete the setup.





# How to Run the Script (python)

1. **Add json file**
   Add json file in the root folder as **service.json** 

2. **Ensure Python is Installed**  
   Verify that Python is installed on your system by running the following command in the terminal:  
   `python -V`

3. **Install Required Packages**  
   Run the following command in the terminal to install the necessary dependencies:  
   `pip install --upgrade google-auth google-api-python-client google-auth-httplib2 google-auth-oauthlib`

4. **Run the Script**  
   After the dependencies are successfully installed, execute the script by running:  
   `python index.py`


# How to Run the Script (Node)

1. **Add json file**
   Add json file in the root folder as **service.json** 

2. **Ensure Python is Installed**  
   Verify that Node is installed on your system by running the following command in the terminal:  
   `node -v`

3. **Install Required Packages**  
   Run the following command in the terminal to install the necessary dependencies:  
   `npm install`

4. **Run the Script**  
   After the dependencies are successfully installed, execute the script by running:  
   `node app.js`