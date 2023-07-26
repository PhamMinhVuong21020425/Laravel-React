<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExampleController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Fetch Data From Laravel API',
            'error' => 'No error',
            'database' => $_ENV['DB_DATABASE'],
        ]);
    }
}