/*
Omega Admin Template
All rights reserverd © 2016
Creativico
*/

"use strict";

jQuery(document).ready(function($){

  // Basic Datatable
  $('#basic-datatable').DataTable();
  
  // Basic Hover Datatable
  $('#hover-datatable').DataTable();

  // Table With Scroll
  $('#scroll-datatable').DataTable( {
	"scrollY":        "200px",
	"scrollCollapse": true,
	"paging":         false
  });

  // Table With Full Number Pagination
  $('#datatable-full-number').DataTable( {
	"pagingType": "full_numbers"
  });

});