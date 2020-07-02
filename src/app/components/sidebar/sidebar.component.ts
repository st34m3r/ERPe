import { Component, OnInit } from "@angular/core";
declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
  children : { 
    path: string,
    title: string 
  }[]
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "",
    class: "",
    children : []
    
  },
  {
    path: "/products",
    title: "Products and services",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "",
    class: "",
    children : [
      {path: "/newproduct",title: "newProduct"},
    ]
  },
  {
    path: "/commandes",
    title: "commandes",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "",
    class: "",
    children : [
      {path: "/newcommande",title: "newcommande"},

    ]
  },
  {
    path: "/canusers",
    title: "users",
    rtlTitle: "الرموز",
    icon: "",
    class: "",
    children : [
      {path: "/newcanuser",title: "new user"},
    ]
  },
  {
    path: "/company",
    title: "Company",
    rtlTitle: "خرائط",
    icon: "",
    class: "",
    children : []
   },
  {
    path: "/FactureFourns",
    title: "facture fournisseur",
    rtlTitle: "إخطارات",
    icon: "",
    class: "",
    children : [
      {path: "/newFactureFourn",title: "new facture fournisseur"},

    ]
  },
  {
    path: "/purchases",
    title: "Purchases",
    rtlTitle: "قائمة الجدول",
    icon: "",
    class: "",
    children : [
      {path: "/newpurchase",title: "new purchase"}
    ]
  },
  {
    path: "/sales",
    title: "Sales",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : [
      {path: "/newsale",title: "new sale"}
    ]
  },
  {
    path: "/marketing",
    title: "Financial Statements",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Digital Marketing",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Reports",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Setting",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/typography",
    title: "Support",
    rtlTitle: "طباعة",
    icon: "",
    class: "",
    children : []
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "",
    class: "",
    children : []
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
   


  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    return window.innerWidth <= 991;

  }
}
