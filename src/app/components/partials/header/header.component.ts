import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home' },
          { label: 'Login', icon: 'pi pi-fw pi' },
          {label: 'User',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Profile',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Ordes',
                        icon: 'pi pi-fw pi-user-minus'
                    }, {
                      label: 'Quit',
                      icon: 'pi pi-fw pi-power-off'
                  }]},
                  { label: 'Carts', icon: 'pi pi-fw pi-cog' },

      ];

      ///////
      
  }



  
}

