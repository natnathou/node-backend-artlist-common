import express from 'express';
import postsRoutes from "./routes/posts.router";
import usersRoutes from "./routes/users.router";
import {logTypeRequestMiddleware} from "./middlewares/log-type-request.middleware";

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);


app.use(logTypeRequestMiddleware);
app.use(`/api/v1/posts/`, postsRoutes);
app.use(`/api/v1/users/`, usersRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
