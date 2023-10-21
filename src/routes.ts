import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import {
    AuthenticateUserController,
    CreateUserController,
    DeleteUserController,
    RefreshTokenUserController,
    GetCoursesControler,
    GetUsersController,
    GetCoursesByIdController,
    GetCoursesByAuthorController,
    GetCoursesAdminController,
    GetUserByIdController,
    CreateCourseController,
    DeleteCourseByIdController,
    UpdateUserController,
    UpdateCourseControler,
    SendCodeController,
    ResetPasswordController,
    DeleteCoursesController,
    DeleteUsersController,
    SaveCourseController,
    DeleteSavedCourseController,
    SavedCoursesController,
    ImageController
} from './modules'

import { UpdateUsersController } from "./modules/updateUsers/UpdateUsersController";
import { UpdateCoursesController } from "./modules/updateCourses/UpdateCoursesController";


// Instâncias dos controladores
const deleteSavedCourseController = new DeleteSavedCourseController();
const saveCourseController = new SaveCourseController();
const resetPasswordController = new ResetPasswordController();
const getUsersController = new GetUsersController();
const createUserController = new CreateUserController();
const createCourseController = new CreateCourseController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();
const getUserByIdlController = new GetUserByIdController();
const deleteUserController = new DeleteUserController();
const getCoursesControler = new GetCoursesControler();
const getCoursesByIdControler = new GetCoursesByIdController();
const getCoursesByAuthorController = new GetCoursesByAuthorController();
const deleteCourseByIdController = new DeleteCourseByIdController();
const updateUserController = new UpdateUserController();
const updateCourseControler = new UpdateCourseControler();
const sendCodeController = new SendCodeController();
const deleteCoursesController = new DeleteCoursesController();
const deleteUsersController = new DeleteUsersController();
const updateUsersController = new UpdateUsersController();
const updateCoursesController = new UpdateCoursesController();
const getCoursesAdminController = new GetCoursesAdminController();
const savedCoursesController = new SavedCoursesController();
//const imageController = new ImageController();
//definição das rotas
const routes = Router();
//CREATE
routes.post('/save', saveCourseController.handle)
routes.post("/register", createUserController.handle);
routes.post("/login", authenticateUserController.handle);
routes.post("/refresh",  refreshTokenUserController.handle);
routes.post('/send-code', sendCodeController.handle);
routes.post('/reset', resetPasswordController.handle)
routes.post("/courses",  createCourseController.handle)
//routes.post("/upload", imageController.handle)
//READ
routes.get("/users/:uuid",  getUserByIdlController.handle);
routes.get('/saved/:uuid', savedCoursesController.handle)
routes.get("/courses", getCoursesControler.handle);
routes.get("/courses/admin", getCoursesAdminController.handle);
routes.get("/users/:uuid/admin", getUsersController.handle);
routes.get("/mycourses/:uuid",  getCoursesByAuthorController.handle);
routes.get("/courses/:uuid", getCoursesByIdControler.handle);
//UPDATE
routes.patch("/courses/:uuid/update",  updateCourseControler.handle)
routes.patch('/users/:uuid/update',  updateUserController.handle);
routes.patch('/users/update', updateUsersController.handle);
routes.patch('/courses/update', updateCoursesController.handle);
//DELETE
routes.delete("/courses/:uuid/delete",  deleteCourseByIdController.handle)
routes.delete("/users/:uuid/delete",  deleteUserController.handle);
routes.delete('/courses/delete', deleteCoursesController.handle)
routes.delete('/users/delete', deleteUsersController.handle)
routes.delete('/save/delete', deleteSavedCourseController.handle)

export { routes }