var myChart = echarts.init(document.getElementById('http1'));
var option = {
    title: {
        text: '延时对耗时影响'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['HTTP1.x', 'HTTP2']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        name: '延时（ms）',
        type: 'category',
        boundaryGap: false,
        data: ['10', '50', '100', '150', '200', '250', '300'],
    },
    yAxis: {
        name: '耗时（s）',
        type: 'value'
    },
    series: [{
            name: 'HTTP1.x',
            type: 'line',
            data: [0.48, 1.50, 2.06, 3.01, 4.09, 4.78, 5.58]
        },
        {
            name: 'HTTP2',
            type: 'line',
            data: [0.49, 0.65, 0.70, 0.94, 1.12, 1.06, 1.20]
        },

    ]
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('http2'));
var option = {
    title: {
        text: '资源大小对耗时影响'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['HTTP1.x', 'HTTP2']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        name: '资源大小（mb）',
        type: 'category',
        boundaryGap: false,
        data: ['0.2', '0.4', '0.6', '0.8', '1.0', '1.2', '1.4'],
    },
    yAxis: {
        name: '耗时（s）',
        type: 'value'
    },
    series: [{
            name: 'HTTP1.x',
            type: 'line',
            data: [0.68, 0.96, 1.30, 1.69, 1.89, 2.27, 2.43]
        },
        {
            name: 'HTTP2',
            type: 'line',
            data: [0.99, 1.30, 1.77, 2.07, 2.47, 3.25, 3.96]
        },

    ]
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('http3'));
var option = {
    title: {
        text: '资源数量对耗时影响（延时120ms，资源大小0.5mb）'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['HTTP1.x', 'HTTP2']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        name: '资源数量（个）',
        type: 'category',
        boundaryGap: false,
        data: ['6', '30', '150', '750'],
    },
    yAxis: {
        name: '耗时（s）',
        type: 'value'
    },
    series: [{
            name: 'HTTP1.x',
            type: 'line',
            data: [0.37, 0.88, 3.83, 19.00]
        },
        {
            name: 'HTTP2',
            type: 'line',
            data: [0.35, 0.92, 2.73, 13.90]
        },

    ]
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('http4'));
var option = {
    title: {
        text: '资源数量对耗时影响（延时120ms，资源大小5kb）'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['HTTP1.x', 'HTTP2']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        name: '资源数量（个）',
        type: 'category',
        boundaryGap: false,
        data: ['6', '30', '150', '750'],
    },
    yAxis: {
        name: '耗时（s）',
        type: 'value'
    },
    series: [{
            name: 'HTTP1.x',
            type: 'line',
            data: [0.28, 0.87, 3.51, 16.18]
        },
        {
            name: 'HTTP2',
            type: 'line',
            data: [0.28, 0.42, 0.94, 3.67]
        },

    ]
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('http5'));
var option = {
    title: {
        text: '网速对耗时影响'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['HTTP1.x', 'HTTP2']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        name: '网络状态',
        type: 'category',
        boundaryGap: false,
        data: ['online', 'fast3G', 'low3G'],
    },
    yAxis: {
        name: '耗时（s）',
        type: 'value'
    },
    series: [{
            name: 'HTTP1.x',
            type: 'line',
            data: [0.10, 6.22, 24.26]
        },
        {
            name: 'HTTP2',
            type: 'line',
            data: [0.07, 6.13, 22.52]
        },

    ]
};
myChart.setOption(option);