@props(['list'=>[], 'hasCheckbox'])

<thead class="table-light">
  <tr>
    @isset ($hasCheckbox)
    <th style="width: 20px;">
      <div class="form-check font-size-16">
        <input type="checkbox" class="form-check-input" id="customCheck1">
        <label class="form-check-label" for="customCheck1">&nbsp;</label>
      </div>
    </th>
    @endisset
    @foreach ($list as $item)
    <th>{{$item}}</th>
    @endforeach
  </tr>
</thead>