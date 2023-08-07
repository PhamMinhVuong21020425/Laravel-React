<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\UserModel;

class UserController extends Controller
{
    /**
     * Show a list of all of the application's users.
     */
    public function index()
    {


        $users = UserModel::paginate(0); // Lấy tất cả các bản ghi trong bảng "users" => Truy vấn qua Model Eloquent
        // $users = DB::table('users')->where('id', 1)->paginate(2); // Truy vấn trực tiếp bằng QueryBuilder
        // $users = DB::select('select * from users'); // Truy vấn thuần
        // DB::table('users')->insert([
        //     ['email' => 'picard@example.com'],
        //     ['email' => 'janeway@example.com'],
        // ]);

        return response()->json($users);
    }
}