import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-employees',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './manage-employees.component.html',
  styleUrl: './manage-employees.component.css'
})
export class ManageEmployeesComponent {

  constructor(private http:HttpClient){
    this.loadTable();
  }

  public employee:any = {
    employeeId: "",
    name: "",
    email: "",
    department: "",
    createdAt: "",
    updatedAt: ""

  };

  public employeeList:any = [];
 
  addEmployee() {
   this.http.post("http://localhost:8080/api/employees/add",this.employee).subscribe(data => {
    alert("Employee Added!")
    this.employeeList = data;
    this.loadTable();
   })
  
  };

  loadTable(){
    this.http.get("http://localhost:8080/api/employees/retrieve/all").subscribe(datas => {
      this.employeeList = datas;
    })
  }

  deleteEmployee(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/api/employees/delete/${id}`).subscribe(data=>{
          this.loadTable();
        })
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }

  public selectedEmployee:any={};

  selectEmployee(employee:any){
    console.log(employee);

    this.selectedEmployee=employee;
    
  }

  updateEmployee(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http.put("http://localhost:8080/api/employees/update",this.selectedEmployee).subscribe(res=>{
          Swal.fire("Saved!", "", "success");
        })
        
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

  }

  openModal(){
    
  }

}
