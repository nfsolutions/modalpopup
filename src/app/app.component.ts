import {Component, ViewChild} from '@angular/core';
import {DialogService} from 'ng2-bootstrap-modal';
import {ConfirmComponent} from './confirm.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialogService: DialogService) {}
  showConfirm() {
    const disposable = this.dialogService.addDialog(ConfirmComponent, {
      title: 'Confirm title',
      message: 'Confirm message'})
      .subscribe((isConfirmed) => {
        // We get dialog result
        if (isConfirmed) {
          alert('accepted');
        } else {
          alert('declined');
        }
      });
    // We can close dialog calling disposable.unsubscribe();
    // If dialog was not closed manually close it by timeout
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }
}
