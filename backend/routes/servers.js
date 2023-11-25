import bodyParser from "body-parser";
import {Router} from "express";
import {getAllUsers} from "../controllers/userController.js";
import {createApplication, getApplications, removeApplication} from "../controllers/applicationController.js";

const jsonParser = bodyParser.json();

const router = Router();
const API_PREFIX = '/api/v1'

router.get('/api/server', getAllUsers);
router.get(API_PREFIX + '/applications', getApplications);
router.post(API_PREFIX + '/applications', jsonParser, createApplication);
router.delete(API_PREFIX + '/applications/:id', removeApplication);

export default router;