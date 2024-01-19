<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        return User::create([
            // 'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password')))
        {
            return response([
                'message' => 'Invalid Credentials'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();

        if ($user instanceof \App\Models\User) {
            $token = $user->createToken('mySanctumToken')->plainTextToken;
            $cookie = cookie('jwToken', $token, 30); // 30 minutes

            return response([
                // 'message' => $token
                'message' => 'Success'
            ], Response::HTTP_OK)->withCookie($cookie);
        }
    }

    public function user()
    {
        return Auth::user();
    }

    public function logout()
    {
        $cookie = Cookie::forget('jwToken');

        return response([
            'message' => "Logged Out"
        ])->withCookie($cookie); // deleted cookie
    }
}
