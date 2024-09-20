import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent {
  emails = [
    {
      sender: 'John Doe',
      subject: 'Meeting Reminder',
      date: '2024-09-18',
      snippet: 'Hi, just a reminder about our meeting tomorrow at 10 AM...'
    },
    {
      sender: 'Jane Smith',
      subject: 'Project Update',
      date: '2024-09-17',
      snippet: 'The latest updates for the project are ready for review...'
    },
    {
      sender: 'Amazon',
      subject: 'Your Order Has Shipped',
      date: '2024-09-16',
      snippet: 'Your order has been shipped and will arrive soon...'
    }
  ];
}
