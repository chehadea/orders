sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'as.fi.orders',
            componentId: 'ZC_ORDERSList',
            contextPath: '/ZC_ORDERS'
        },
        CustomPageDefinitions
    );
});