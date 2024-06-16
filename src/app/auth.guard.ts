import { Injectable } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';



export const authGuard: CanActivateFn = (route, state) => {



  return true;


};
