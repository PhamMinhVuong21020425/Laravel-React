<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use App\Support\Address;

class UserModel extends Model
{
    protected $table = 'users';

    /**
     * Retrieve the model for a bound value.
     *
     * @param  mixed  $value
     * @param  string|null  $field
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function resolveRouteBinding($value, $field = null)
    {
        return $this->where('name', $value)->firstOrFail();
    }

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn(string $value) => strtoupper($value),
            set: fn(string $value) => strtolower($value),
        );
    }
    protected function address(): Attribute
    {
        return Attribute::make(
            get: function (mixed $value, array $attributes) {
                return new Address(
                    $attributes['email'],
                    $attributes['age'],
                );
            },
            set: fn(Address $value) => [
                'email' => $value->email,
                'age' => $value->age,
            ],
        );
    }
}