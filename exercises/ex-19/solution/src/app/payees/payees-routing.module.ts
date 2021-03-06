import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayeesListRoutedComponent } from './payees-list-routed/payees-list-routed.component';

const routes: Routes = [
  {
    path: 'payees/list',
    component: PayeesListRoutedComponent
  },
  {
    path: 'payees',
    redirectTo: 'payees/list'
  }
];

/*
 * Adding routing to payees
 * We need a wrapper component first:
 * - PayeesListRouted
 *
 * Create that using the command line tool
 *
 * For PayeesListRoutedComponent, go to PayeesManagerComponent and grab the following:
 * - handleUpdateFilter
 * - handleSortPayees
 * - handleSelectPayee
 * - ngOnInit (for data)
 *
 * Move these and their associated code over to PayeesListRoutedComponent
 *
 * From payees-manager.component.html, move the HTML for <payees-list> over to
 * the HTML template for PayeesListRoutedComponent
 * Also remove the *ngIf which refers to PayeesViews
 *
 * Then add a routing configuration here for the list
 * url: payees/list
 * component: PayeesListRoutedComponent
 *
 * url: 'payees'
 * redirectTo: payees/list
 *
 * Keep in mind that you will not be able to use the Detail view until the next
 * exercise.
 *
 * But the PayeesList should otherwise work.
 *
 */




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayeesRoutingModule { }
