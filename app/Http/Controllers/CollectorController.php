<?php

namespace App\Http\Controllers;

use App\Models\Collector;
use App\Http\Requests\StoreCollectorRequest;
use App\Http\Requests\UpdateCollectorRequest;

class CollectorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCollectorRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Collector $collector)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Collector $collector)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCollectorRequest $request, Collector $collector)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Collector $collector)
    {
        //
    }
}
