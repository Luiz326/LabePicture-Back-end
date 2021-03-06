import { Router } from "express";
import { ImageController } from "../controller/ImageController";

export const imageRouter = Router();

imageRouter.post("/", new ImageController().createImage);
imageRouter.get("/", new ImageController().getAllImages);
imageRouter.get("/:id", new ImageController().getImage);
