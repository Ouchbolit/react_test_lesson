import tasksApi from "./taskApi";

export const SERVER_API = 'http://localhost:8000'

export const apiGateway = {
    tasks: tasksApi,
}