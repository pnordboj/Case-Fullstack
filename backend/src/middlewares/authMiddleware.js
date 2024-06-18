// Raskt eksempel på en authmiddleware til denne casen
import jwt from 'jsonwebtoken';
import { Router } from 'itty-router';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.get('authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return new Response('Unauthorized', { status: 401 });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return new Response('Forbidden', { status: 403 });
        req.user = user;
        next();
    });
};
