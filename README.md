# Deploy development server on your machine

Run the following command sequentially to get a proper setup.

1. Open the command prompt or terminal in the root directory of the repository.
Then run the command :

`npm install` 

Wait till all dependencies are installed.

2. `cd frontend`

3. `npm install`

Wait till all dependencies are installed.

4. `cd ..`

5. `cd backend` (same for the backend)

6. `npm install`

Wait till all dependencies are installed.

7. `cd ..` and then `npm run dev`

This will run the Express server at `localhost:4000` and the React development server
at `localhost:3000` concurrently. API calls will be directed to and from port 5000.

8. Enjoy!

Yea I know its all hyped up, but for now the back-end is not at all in working condition.
So, go ahead and tinker with the frontend! :smile:

P.s. added React routing. Please style it because the Navbar is ugly af.

## Note the Navbar is transparent already.

package.json is the file which contains information about dependencies.