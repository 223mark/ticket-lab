<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    //profile
    public function profile()
    {
        return view('profile.profile', [
            'data' => User::where('id', auth()->user()->id)->first(),
        ]);
    }

    //update
    public function update(Request $request)
    {
        $this->validationCheck($request);
        if ($request->has('img')) {
            $data = $this->requestedDataWithImage($request);
            User::where('id', auth()->user()->id)->update($data);
            return back();
        };
        $data = $this->requestedDataWithoutImage($request);
        User::where('id', auth()->user()->id)->update($data);
        return back();
    }

    public function passwordChagePage()
    {
        return view('profile.password-change');
    }

    //PRIVATE FUNCTON
    private function validationCheck($request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required'
        ]);
    }
    private function requestedDataWithoutImage($request)
    {
        return [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone
        ];
    }
    private function requestedDataWithImage($request)
    {

        $file = $request->img;
        $fileName = uniqid() . $file->getClientOriginalName();
        $file->move(public_path() . '/img/adminImage/', $fileName);
        return [
            'name' => $request->name,
            'email' => $request->email,
            'img' => $fileName,
            'phone' => $request->phone
        ];
    }
}
