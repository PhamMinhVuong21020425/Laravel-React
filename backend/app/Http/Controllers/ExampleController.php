<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Str;

class ExampleController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Fetch Data From Laravel API',
            'error' => 'No error',
            'database' => $_ENV['DB_DATABASE'],
            'slug' => Str::slug('HEllo World! ', '+'),
        ]);
    }
}