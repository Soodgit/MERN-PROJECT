import { UnauthorizedError, BadRequestError } from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
    const { token } = req.cookies;
    if(!token) throw new UnauthorizedError('authentication invalid');
    try {
       const {userId, role } = verifyJWT(token);
       const testUser = userId === '67514d00f7f55b1406899b8c';
       req.user = { userId, role, testUser };
        next();
        
    } catch (error) {
        throw new UnauthorizedError('authentication invalid');
    } 
};

export const authorizePermissions = (...roles) => {
    return (req, res, next)=> {
        if(!roles.includes(req.user.role)) {
            throw new UnauthorizedError('Unauthorized to access this route');
        }
    next();
};
};

export const checkForTestUser = (req, res, next) => {
    if(req.user.testUser) {
        throw new BadRequestError('Demo User. Read Only!');
    }
    next();
}; 