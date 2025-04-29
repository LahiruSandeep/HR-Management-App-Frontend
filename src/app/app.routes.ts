import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageEmployeesComponent } from './pages/manage-employees/manage-employees.component';
import { EmployeeComponent } from './pages/employee/employee.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'manage-employee',
    component: ManageEmployeesComponent,
  },

  {
    path: 'employee',
    component: ManageEmployeesComponent,
    children: [
      {
        path: '',
        component: EmployeeComponent,
      },
      {
        path: 'add-customer',
        component: AddCustomerComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashPageComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      // {
      //   path: "customers",
      //   component: CustomerRootComponent,
      //   children:[
      //     {
      //       path:"",
      //       component:ManageCustomersComponent
      //     },
      //     {
      //       path:"add-customer",
      //       component:AddCustomerComponent
      //     },
      //     {
      //       path:"view-all",
      //       component:ManageCustomersComponent
      //     }
      //   ]
      // }

      // {
      //   path: "patient",
      //   component: PatientRootComponent,
      //   children:[
      //     {
      //       path:"",
      //       component:PatientManageComponent
      //     },
      //     {
      //       path: "add-patient",
      //       component: AddPatientComponent
      //     },
      //     {
      //       path:"manage-all",
      //       component: PatientManageComponent
      //     }
      //   ]
      // },
    ],
  },
];
