<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PhotoController;
use App\Models\UserModel;
use App\Support\Address;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::group(['middleware' => []], function () {
    Route::get('/', function () {
        // return view('welcome');
        $user = new UserModel();
        $user->name = 'Sally';
        $user->email = 'pmv@vnu.edu.vn';
        $user->password = '123456';
        $user->address = new Address('pham.minh.vuong@sun-asterisk.com', 20);
        // $user->save();
        // return response($user->name);
        $user = UserModel::find(1);
        return response()->json($user->address);
    });

    Route::get('/example', [ExampleController::class, 'index']);

    Route::options('/example', function () {
        // Xử lý logic tại đây
        // Trả về các thông tin về phương thức HTTP mà máy chủ hỗ trợ
        return response()->json(['allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']]);
    });

    Route::get('/user', [
        UserController::class,
        'index'
    ]);

    Route::resource('/photos', PhotoController::class)
        ->names(['create' => 'build'])
        ->parameters(['photo' => 'id_photo']);

    Route::get('/welcome', function () {
        return response('Welcome to Laravel!')->cookie('player', 'Kane');
        // $pathToFile = public_path('favicon.ico');
        // $name = 'favicon.ico';
        // return response()->download($pathToFile, $name);
    });
});
