@props(['info'=>false,'success'=>false,'danger'=>false])


<span @class([ 'badge rounded-pill font-size-12' , 'bg-soft-info'=> $info,
  'bg-soft-success' => $success,
  'bg-soft-danger' => $danger,
  ])>{{$slot}}</span>