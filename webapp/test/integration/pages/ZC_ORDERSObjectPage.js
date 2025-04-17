sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'as.fi.orders',
            componentId: 'ZC_ORDERSObjectPage',
            contextPath: '/ZC_ORDERS'
        },
        CustomPageDefinitions
    );
});