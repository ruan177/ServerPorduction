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
    ImageController, 
    GetImageController,
    UpdateProfileImageController,
    UpdateUsersController,
    UpdateCoursesController,
} from './useCases'


import multer from "multer";
import { storage } from "./middlewares/multer";


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
const imageController = new ImageController();
const getImageController = new GetImageController()
const updateProfileImageController = new UpdateProfileImageController();
//definição das rotas
const routes = Router();
const upload = multer({ storage });
//CREATE
routes.post('/save',ensureAuthenticated, saveCourseController.handle)
routes.post("/register", createUserController.handle);
routes.post("/login", authenticateUserController.handle);
routes.post("/refresh",  refreshTokenUserController.handle);
routes.post('/send-code', sendCodeController.handle);
routes.post('/reset', resetPasswordController.handle)
routes.post("/courses",ensureAuthenticated,  createCourseController.handle)
routes.post("/upload", upload.single('file'), imageController.handle)
routes.patch("/profile/:uuid",upload.single('file'),updateProfileImageController.handle )
//READ
routes.get("/users/:uuid",ensureAuthenticated,  getUserByIdlController.handle);
routes.get('/saved/:uuid',ensureAuthenticated, savedCoursesController.handle)
routes.get("/courses", getCoursesControler.handle);
routes.get("/courses/admin",ensureAuthenticated, getCoursesAdminController.handle);
routes.get("/users/:uuid/admin", getUsersController.handle);
routes.get("/mycourses/:uuid",  getCoursesByAuthorController.handle);
routes.get("/courses/:uuid", getCoursesByIdControler.handle);
routes.get('/images/:filename', getImageController.handle)

//UPDATE
routes.patch("/courses/:uuid/update", ensureAuthenticated,  updateCourseControler.handle)
routes.patch('/users/:uuid/update',ensureAuthenticated,  updateUserController.handle);
routes.patch('/users/update',ensureAuthenticated,  updateUsersController.handle);
routes.patch('/courses/update',ensureAuthenticated,  updateCoursesController.handle);
//DELETE
routes.delete("/courses/:uuid/delete",ensureAuthenticated,   deleteCourseByIdController.handle)
routes.delete("/users/:uuid/delete",ensureAuthenticated,   deleteUserController.handle);
routes.delete('/courses/delete',ensureAuthenticated,  deleteCoursesController.handle)
routes.delete('/users/delete',ensureAuthenticated,  deleteUsersController.handle)
routes.delete('/save/delete',ensureAuthenticated,  deleteSavedCourseController.handle)

export { routes }
