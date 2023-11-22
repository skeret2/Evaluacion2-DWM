<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;

class ProductoController extends Controller
{
    public function index()
    {
        return Producto::all();

    }

    public function create(Request $request)
    {
        Producto::create($request->all());
            return response()->json([
                'res' => true,
                'msg' => 'Producto guardado exitosamente'
            ],200);
    }

    public function update(Request $request, Producto $producto)
    {
        $producto->update($request->all());
        return response()->json([
            'res' => true,
            'msg' => 'Producto modificado exitosamente'
        ],200);
    }

    public function delete(Producto $producto)
    {
        $producto->delete();
            return response()->json([
                'res => true',
                'mensaje' => 'Producto elimindado correctamente'
            ],200);
    }
}
