import React from "react";
import { NavLink } from "react-router-dom";
import TabsInternas from "./tabs";

export default function Contenido() {
    return (
        <div className="container-xl px-4 mt-n10 mrgb-50">
            {/* Wizard card example with navigation*/}
            <div className="card">
                <div className="card-header border-bottom">
                    {/* Wizard navigation*/}
                    <div
                        className="nav nav-pills nav-justified flex-column flex-sm-row nav-wizard"
                        id="cardTab"
                        role="tablist"
                    >
                        {/* Wizard navigation item 1*/}
                        <a
                            className="nav-item nav-link active"
                            id="wizard1-tab"
                            href="#wizard1"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="wizard1"
                            aria-selected="true"
                        >
                            <div className="wizard-step-icon">1</div>
                            <div className="wizard-step-text">
                                <div className="wizard-step-text-name">Account Setup</div>
                                <div className="wizard-step-text-details">
                                    Basic details and information
                                </div>
                            </div>
                        </a>
                        {/* Wizard navigation item 2*/}
                        <a
                            className="nav-item nav-link"
                            id="wizard2-tab"
                            href="#wizard2"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="wizard2"
                            aria-selected="false"
                            tabIndex={-1}
                        >
                            <div className="wizard-step-icon">2</div>
                            <div className="wizard-step-text">
                                <div className="wizard-step-text-name">Billing Details</div>
                                <div className="wizard-step-text-details">
                                    Credit card information
                                </div>
                            </div>
                        </a>
                        
                    </div>
                </div>
                <div className="card-body">
                    <div className="tab-content" id="cardTabContent">
                        {/* Wizard tab pane item 1*/}
                        <div
                            className="tab-pane py-5 py-xl-10 fade show active"
                            id="wizard1"
                            role="tabpanel"
                            aria-labelledby="wizard1-tab"
                        >
                            <div className="row justify-content-center">
                                <div className="col-xxl-6 col-xl-8">
                                    <h3 className="text-primary">Step 1</h3>
                                    <h5 className="card-title mb-4">
                                        Enter your account information
                                    </h5>
                                    <form>
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="inputUsername">
                                                Username (how your name will appear to other users on the
                                                site)
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputUsername"
                                                type="text"
                                                placeholder="Enter your username"
                                                defaultValue="username"
                                            />
                                        </div>
                                        <div className="row gx-3">
                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" htmlFor="inputFirstName">
                                                    First name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputFirstName"
                                                    type="text"
                                                    placeholder="Enter your first name"
                                                    defaultValue="Valerie"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" htmlFor="inputLastName">
                                                    Last name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputLastName"
                                                    type="text"
                                                    placeholder="Enter your last name"
                                                    defaultValue="Luna"
                                                />
                                            </div>
                                        </div>
                                        <div className="row gx-3">
                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" htmlFor="inputOrgName">
                                                    Organization name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputOrgName"
                                                    type="text"
                                                    placeholder="Enter your organization name"
                                                    defaultValue="Start Bootstrap"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" htmlFor="inputLocation">
                                                    Location
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputLocation"
                                                    type="text"
                                                    placeholder="Enter your location"
                                                    defaultValue="San Francisco, CA"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="small mb-1" htmlFor="inputEmailAddress">
                                                Email address
                                            </label>
                                            <input
                                                className="form-control"
                                                id="inputEmailAddress"
                                                type="email"
                                                placeholder="Enter your email address"
                                                defaultValue="name@example.com"
                                            />
                                        </div>
                                        <div className="row gx-3">
                                            <div className="col-md-6 mb-md-0">
                                                <label className="small mb-1" htmlFor="inputPhone">
                                                    Phone number
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputPhone"
                                                    type="tel"
                                                    placeholder="Enter your phone number"
                                                    defaultValue="555-123-4567"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-0">
                                                <label className="small mb-1" htmlFor="inputBirthday">
                                                    Birthday
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputBirthday"
                                                    type="text"
                                                    name="birthday"
                                                    placeholder="Enter your birthday"
                                                    defaultValue="06/10/1988"
                                                />
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-flex justify-content-between">
                                            <button
                                                className="btn btn-light disabled"
                                                type="button"
                                                disabled=""
                                            >
                                                Previous
                                            </button>
                                            <button className="btn btn-primary" type="button">
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Wizard tab pane item 2*/}
                        <div
                            className="tab-pane py-5 py-xl-10 fade"
                            id="wizard2"
                            role="tabpanel"
                            aria-labelledby="wizard2-tab"
                        >
                            <div className="row justify-content-center">
                                <div className="col-xxl-6 col-xl-8">
                                    <h3 className="text-primary">Step 2</h3>
                                    <h5 className="card-title mb-4">Enter your billing details</h5>
                                    <form>
                                        <div className="row gx-3">
                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" htmlFor="inputBillingName">
                                                    Name on card
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputBillingName"
                                                    type="text"
                                                    placeholder="Enter the name as it appears on your card"
                                                    defaultValue="Valerie Luna"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label
                                                    className="small mb-1"
                                                    htmlFor="inputBillingCCNumber"
                                                >
                                                    Card number
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputBillingCCNumber"
                                                    type="text"
                                                    placeholder="Enter your credit card number"
                                                    defaultValue="4444 3333 2222 1111"
                                                />
                                            </div>
                                        </div>
                                        <div className="row gx-3">
                                            <div className="col-md-4 mb-4 mb-md-0">
                                                <label className="small mb-1" htmlFor="inputOrgName">
                                                    Card expiry month
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputOrgName"
                                                    type="text"
                                                    placeholder="Enter expiry month"
                                                    defaultValue={6}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-4 mb-md-0">
                                                <label className="small mb-1" htmlFor="inputLocation">
                                                    Card expiry year
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputLocation"
                                                    type="text"
                                                    placeholder="Enter expiry year"
                                                    defaultValue={2024}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-0">
                                                <label className="small mb-1" htmlFor="inputLocation">
                                                    CVV Number
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputLocation"
                                                    type="password"
                                                    placeholder="Enter CVV number"
                                                    defaultValue={111}
                                                />
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-light" type="button">
                                                Previous
                                            </button>
                                            <button className="btn btn-primary" type="button">
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Wizard tab pane item 3*/}
                        <div
                            className="tab-pane py-5 py-xl-10 fade"
                            id="wizard3"
                            role="tabpanel"
                            aria-labelledby="wizard3-tab"
                        >
                            <div className="row justify-content-center">
                                <div className="col-xxl-6 col-xl-8">
                                    <h3 className="text-primary">Step 3</h3>
                                    <h5 className="card-title mb-4">
                                        Choose when you want to receive email notifications
                                    </h5>
                                    <form>
                                        <div className="form-check mb-2">
                                            <input
                                                className="form-check-input"
                                                id="checkAccountChanges"
                                                type="checkbox"
                                                defaultChecked=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkAccountChanges"
                                            >
                                                Changes made to your account
                                            </label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input
                                                className="form-check-input"
                                                id="checkAccountGroups"
                                                type="checkbox"
                                                defaultChecked=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkAccountGroups"
                                            >
                                                Changes are made to groups you're part of
                                            </label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input
                                                className="form-check-input"
                                                id="checkProductUpdates"
                                                type="checkbox"
                                                defaultChecked=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkProductUpdates"
                                            >
                                                Product updates for products you've purchased or starred
                                            </label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input
                                                className="form-check-input"
                                                id="checkProductNew"
                                                type="checkbox"
                                                defaultChecked=""
                                            />
                                            <label className="form-check-label" htmlFor="checkProductNew">
                                                Information on new products and services
                                            </label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input
                                                className="form-check-input"
                                                id="checkPromotional"
                                                type="checkbox"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkPromotional"
                                            >
                                                Marketing and promotional offers
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="checkSecurity"
                                                type="checkbox"
                                                defaultChecked=""
                                                disabled=""
                                            />
                                            <label className="form-check-label" htmlFor="checkSecurity">
                                                Security alerts
                                            </label>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-light" type="button">
                                                Previous
                                            </button>
                                            <button className="btn btn-primary" type="button">
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Wizard tab pane item 4*/}
                        <div
                            className="tab-pane py-5 py-xl-10 fade"
                            id="wizard4"
                            role="tabpanel"
                            aria-labelledby="wizard4-tab"
                        >
                            <div className="row justify-content-center">
                                <div className="col-xxl-6 col-xl-8">
                                    <h3 className="text-primary">Step 4</h3>
                                    <h5 className="card-title mb-4">
                                        Review the following information and submit
                                    </h5>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>Username:</em>
                                        </div>
                                        <div className="col">username</div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>Name:</em>
                                        </div>
                                        <div className="col">Valerie Luna</div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>Organization Name:</em>
                                        </div>
                                        <div className="col">Start Bootstrap</div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>Location:</em>
                                        </div>
                                        <div className="col">San Francisco, CA</div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>Email Address:</em>
                                        </div>
                                        <div className="col">name@example.com</div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>Phone Number:</em>
                                        </div>
                                        <div className="col">555-123-4567</div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>Birthday:</em>
                                        </div>
                                        <div className="col">06/10/1988</div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>Credit Card Number:</em>
                                        </div>
                                        <div className="col">**** **** **** 1111</div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>Credit Card Expiration:</em>
                                        </div>
                                        <div className="col">06/2024</div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-light" type="button">
                                            Previous
                                        </button>
                                        <button className="btn btn-primary" type="button">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}



function Contenido123() {
    return (

        <div id="content">

            {/* Begin Page Content */}
            <TabsInternas />
            <div className="container-fluid">
                {/* Page Heading */}

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a
                        href="#"
                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                    >
                        <i className="fas fa-download fa-sm text-white-50" /> Generate
                        Report
                    </a>
                </div>
                {/* Content Row */}
                <div className="row">
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Earnings (Monthly)
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            $40,000
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Earnings (Annual)
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            $215,000
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                            Tasks
                                        </div>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                    50%
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="progress progress-sm mr-2">
                                                    <div
                                                        className="progress-bar bg-info"
                                                        role="progressbar"
                                                        style={{ width: "50%" }}
                                                        aria-valuenow={50}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pending Requests Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Pending Requests
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            18
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-comments fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content Row */}
                <div className="row">
                    {/* Area Chart */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* Card Header - Dropdown */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    Earnings Overview
                                </h6>
                                <div className="dropdown no-arrow">
                                    <a
                                        className="dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="dropdownMenuLink"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink"
                                    >
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Card Body */}
                            <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="myAreaChart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pie Chart */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* Card Header - Dropdown */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    Revenue Sources
                                </h6>
                                <div className="dropdown no-arrow">
                                    <a
                                        className="dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="dropdownMenuLink"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink"
                                    >
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Card Body */}
                            <div className="card-body">
                                <div className="chart-pie pt-4 pb-2">
                                    <canvas id="myPieChart" />
                                </div>
                                <div className="mt-4 text-center small">
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-primary" /> Direct
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-success" /> Social
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-info" /> Referral
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content Row */}
                <div className="row">
                    {/* Content Column */}
                    <div className="col-lg-6 mb-4">
                        {/* Project Card Example */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    Projects
                                </h6>
                            </div>
                            <div className="card-body">
                                <h4 className="small font-weight-bold">
                                    Server Migration <span className="float-right">20%</span>
                                </h4>
                                <div className="progress mb-4">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow={20}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h4 className="small font-weight-bold">
                                    Sales Tracking <span className="float-right">40%</span>
                                </h4>
                                <div className="progress mb-4">
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: "40%" }}
                                        aria-valuenow={40}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h4 className="small font-weight-bold">
                                    Customer Database <span className="float-right">60%</span>
                                </h4>
                                <div className="progress mb-4">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "60%" }}
                                        aria-valuenow={60}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h4 className="small font-weight-bold">
                                    Payout Details <span className="float-right">80%</span>
                                </h4>
                                <div className="progress mb-4">
                                    <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={80}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h4 className="small font-weight-bold">
                                    Account Setup <span className="float-right">Complete!</span>
                                </h4>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{ width: "100%" }}
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Color System */}
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-primary text-white shadow">
                                    <div className="card-body">
                                        Primary
                                        <div className="text-white-50 small">#4e73df</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-success text-white shadow">
                                    <div className="card-body">
                                        Success
                                        <div className="text-white-50 small">#1cc88a</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body">
                                        Info
                                        <div className="text-white-50 small">#36b9cc</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-warning text-white shadow">
                                    <div className="card-body">
                                        Warning
                                        <div className="text-white-50 small">#f6c23e</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-danger text-white shadow">
                                    <div className="card-body">
                                        Danger
                                        <div className="text-white-50 small">#e74a3b</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-secondary text-white shadow">
                                    <div className="card-body">
                                        Secondary
                                        <div className="text-white-50 small">#858796</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-light text-black shadow">
                                    <div className="card-body">
                                        Light
                                        <div className="text-black-50 small">#f8f9fc</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-dark text-white shadow">
                                    <div className="card-body">
                                        Dark
                                        <div className="text-white-50 small">#5a5c69</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        {/* Illustrations */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    Illustrations
                                </h6>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img
                                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                        style={{ width: "25rem" }}
                                        src="img/undraw_posting_photo.svg"
                                        alt="..."
                                    />
                                </div>
                                <p>
                                    Add some quality, svg illustrations to your project courtesy
                                    of{" "}
                                    <a target="_blank" rel="nofollow" href="https://undraw.co/">
                                        unDraw
                                    </a>
                                    , a constantly updated collection of beautiful svg images
                                    that you can use completely free and without attribution!
                                </p>
                                <a target="_blank" rel="nofollow" href="https://undraw.co/">
                                    Browse Illustrations on unDraw →
                                </a>
                            </div>
                        </div>
                        {/* Approach */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    Development Approach
                                </h6>
                            </div>
                            <div className="card-body">
                                <p>
                                    SB Admin 2 makes extensive use of Bootstrap 4 utility
                                    classes in order to reduce CSS bloat and poor page
                                    performance. Custom CSS classes are used to create custom
                                    components and custom utility classes.
                                </p>
                                <p className="mb-0">
                                    Before working with this theme, you should become familiar
                                    with the Bootstrap framework, especially the utility
                                    classes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.container-fluid */}
        </div>
    );
}