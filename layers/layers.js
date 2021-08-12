var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinpordepartamentoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_3 = format_PoblacinpordepartamentoINDEC_3.readFeatures(json_PoblacinpordepartamentoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_3.addFeatures(features_PoblacinpordepartamentoINDEC_3);
var lyr_PoblacinpordepartamentoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_3, 
                style: style_PoblacinpordepartamentoINDEC_3,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_0.png" /> 13.750 - 14.375<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_1.png" /> 14.376 - 18.400<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_2.png" /> 18.401 - 85.025<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_3.png" /> 85.026 o más<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 7.000 - 8.350<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 8.351 - 10.775<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 10.776 - 52.000<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 52.001 - 152.000<br />'
        });
var format_ViviendasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasruralesINDEC_5 = format_ViviendasruralesINDEC_5.readFeatures(json_ViviendasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasruralesINDEC_5.addFeatures(features_ViviendasruralesINDEC_5);
var lyr_ViviendasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasruralesINDEC_5, 
                style: style_ViviendasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_0.png" /> Hasta 420<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_1.png" /> 421 - 3.250<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_2.png" /> 3.251 - 5.000<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_3.png" /> 5.001 - 6.250<br />'
        });
var format_CabezasporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasporcinosMAGyP_6 = format_CabezasporcinosMAGyP_6.readFeatures(json_CabezasporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasporcinosMAGyP_6.addFeatures(features_CabezasporcinosMAGyP_6);
var lyr_CabezasporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasporcinosMAGyP_6, 
                style: style_CabezasporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_0.png" /> 2.775 - 4.950<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_1.png" /> 4.951 - 9.150<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_2.png" /> 9.151 - 33.025<br />\
    <img src="styles/legend/CabezasporcinosMAGyP_6_3.png" /> 33.026 o más<br />'
        });
var format_CabezasovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasovinosMAGyP_7 = format_CabezasovinosMAGyP_7.readFeatures(json_CabezasovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasovinosMAGyP_7.addFeatures(features_CabezasovinosMAGyP_7);
var lyr_CabezasovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasovinosMAGyP_7, 
                style: style_CabezasovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_0.png" /> 4.000 - 5.725<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_1.png" /> 5.726 - 9.525<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_2.png" /> 9.526 - 31.000<br />\
    <img src="styles/legend/CabezasovinosMAGyP_7_3.png" /> 31.001 - 40.000<br />'
        });
var format_CabezascaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezascaprinosMAGyP_8 = format_CabezascaprinosMAGyP_8.readFeatures(json_CabezascaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezascaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezascaprinosMAGyP_8.addFeatures(features_CabezascaprinosMAGyP_8);
var lyr_CabezascaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezascaprinosMAGyP_8, 
                style: style_CabezascaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_0.png" /> 2.725 - 4.450<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_1.png" /> 4.451 - 19.875<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_2.png" /> 19.876 - 64.775<br />\
    <img src="styles/legend/CabezascaprinosMAGyP_8_3.png" /> 64.776 o más<br />'
        });
var format_CabezasbovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasbovinosMAGyP_9 = format_CabezasbovinosMAGyP_9.readFeatures(json_CabezasbovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasbovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasbovinosMAGyP_9.addFeatures(features_CabezasbovinosMAGyP_9);
var lyr_CabezasbovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasbovinosMAGyP_9, 
                style: style_CabezasbovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_0.png" /> Hasta 26.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_1.png" /> 26.000 - 110.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_2.png" /> 110.001 - 170.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_3.png" /> 170.001 - 325.000<br />\
    <img src="styles/legend/CabezasbovinosMAGyP_9_4.png" /> 325.001 o más<br />'
        });
var format_HectreasbananosINDEC_10 = new ol.format.GeoJSON();
var features_HectreasbananosINDEC_10 = format_HectreasbananosINDEC_10.readFeatures(json_HectreasbananosINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasbananosINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasbananosINDEC_10.addFeatures(features_HectreasbananosINDEC_10);
var lyr_HectreasbananosINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasbananosINDEC_10, 
                style: style_HectreasbananosINDEC_10,
                interactive: true,
    title: 'Hectáreas bananos (INDEC)<br />\
    <img src="styles/legend/HectreasbananosINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasbananosINDEC_10_1.png" /> 1 - 100<br />\
    <img src="styles/legend/HectreasbananosINDEC_10_2.png" /> 2.350<br />'
        });
var format_HectreashortalizasINDEC_11 = new ol.format.GeoJSON();
var features_HectreashortalizasINDEC_11 = format_HectreashortalizasINDEC_11.readFeatures(json_HectreashortalizasINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreashortalizasINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreashortalizasINDEC_11.addFeatures(features_HectreashortalizasINDEC_11);
var lyr_HectreashortalizasINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreashortalizasINDEC_11, 
                style: style_HectreashortalizasINDEC_11,
                interactive: true,
    title: 'Hectáreas hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreashortalizasINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreashortalizasINDEC_11_1.png" /> 1 - 100<br />\
    <img src="styles/legend/HectreashortalizasINDEC_11_2.png" /> 101 - 700<br />\
    <img src="styles/legend/HectreashortalizasINDEC_11_3.png" /> 701 - 1.250<br />\
    <img src="styles/legend/HectreashortalizasINDEC_11_4.png" /> 1.251 o más<br />'
        });
var format_HectreaspomelosINDEC_12 = new ol.format.GeoJSON();
var features_HectreaspomelosINDEC_12 = format_HectreaspomelosINDEC_12.readFeatures(json_HectreaspomelosINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreaspomelosINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreaspomelosINDEC_12.addFeatures(features_HectreaspomelosINDEC_12);
var lyr_HectreaspomelosINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreaspomelosINDEC_12, 
                style: style_HectreaspomelosINDEC_12,
                interactive: true,
    title: 'Hectáreas pomelos (INDEC)<br />\
    <img src="styles/legend/HectreaspomelosINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreaspomelosINDEC_12_1.png" /> 1 - 10<br />\
    <img src="styles/legend/HectreaspomelosINDEC_12_2.png" /> 11 - 80<br />\
    <img src="styles/legend/HectreaspomelosINDEC_12_3.png" /> 81 - 134<br />'
        });
var format_HectreassojaINDEC_13 = new ol.format.GeoJSON();
var features_HectreassojaINDEC_13 = format_HectreassojaINDEC_13.readFeatures(json_HectreassojaINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassojaINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassojaINDEC_13.addFeatures(features_HectreassojaINDEC_13);
var lyr_HectreassojaINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassojaINDEC_13, 
                style: style_HectreassojaINDEC_13,
                interactive: true,
    title: 'Hectáreas soja (INDEC)<br />\
    <img src="styles/legend/HectreassojaINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreassojaINDEC_13_1.png" /> 1 - 200<br />\
    <img src="styles/legend/HectreassojaINDEC_13_2.png" /> 201 - 1.950<br />\
    <img src="styles/legend/HectreassojaINDEC_13_3.png" /> 1.951 o más<br />'
        });
var format_HectreasalgodnINDEC_14 = new ol.format.GeoJSON();
var features_HectreasalgodnINDEC_14 = format_HectreasalgodnINDEC_14.readFeatures(json_HectreasalgodnINDEC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasalgodnINDEC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasalgodnINDEC_14.addFeatures(features_HectreasalgodnINDEC_14);
var lyr_HectreasalgodnINDEC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasalgodnINDEC_14, 
                style: style_HectreasalgodnINDEC_14,
                interactive: true,
    title: 'Hectáreas algodón (INDEC)<br />\
    <img src="styles/legend/HectreasalgodnINDEC_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasalgodnINDEC_14_1.png" /> 1 - 80<br />\
    <img src="styles/legend/HectreasalgodnINDEC_14_2.png" /> 81 - 2.650<br />\
    <img src="styles/legend/HectreasalgodnINDEC_14_3.png" /> 2.651 - 4.575<br />'
        });
var format_Localidades_15 = new ol.format.GeoJSON();
var features_Localidades_15 = format_Localidades_15.readFeatures(json_Localidades_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_15.addFeatures(features_Localidades_15);
var lyr_Localidades_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_15, 
                style: style_Localidades_15,
                interactive: true,
                title: '<img src="styles/legend/Localidades_15.png" /> Localidades'
            });
var format_BERFormosa_16 = new ol.format.GeoJSON();
var features_BERFormosa_16 = format_BERFormosa_16.readFeatures(json_BERFormosa_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERFormosa_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERFormosa_16.addFeatures(features_BERFormosa_16);
var lyr_BERFormosa_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERFormosa_16, 
                style: style_BERFormosa_16,
                interactive: true,
                title: '<img src="styles/legend/BERFormosa_16.png" /> BER Formosa'
            });
var format_BERFormosa_17 = new ol.format.GeoJSON();
var features_BERFormosa_17 = format_BERFormosa_17.readFeatures(json_BERFormosa_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERFormosa_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERFormosa_17.addFeatures(features_BERFormosa_17);
var lyr_BERFormosa_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERFormosa_17, 
                style: style_BERFormosa_17,
                interactive: true,
                title: '<img src="styles/legend/BERFormosa_17.png" /> BER Formosa'
            });
var format_DelegacinFormosacapital_18 = new ol.format.GeoJSON();
var features_DelegacinFormosacapital_18 = format_DelegacinFormosacapital_18.readFeatures(json_DelegacinFormosacapital_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinFormosacapital_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinFormosacapital_18.addFeatures(features_DelegacinFormosacapital_18);
var lyr_DelegacinFormosacapital_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinFormosacapital_18, 
                style: style_DelegacinFormosacapital_18,
                interactive: true,
                title: '<img src="styles/legend/DelegacinFormosacapital_18.png" /> Delegación Formosa (capital)'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinpordepartamentoINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_ViviendasruralesINDEC_5.setVisible(true);lyr_CabezasporcinosMAGyP_6.setVisible(true);lyr_CabezasovinosMAGyP_7.setVisible(true);lyr_CabezascaprinosMAGyP_8.setVisible(true);lyr_CabezasbovinosMAGyP_9.setVisible(true);lyr_HectreasbananosINDEC_10.setVisible(true);lyr_HectreashortalizasINDEC_11.setVisible(true);lyr_HectreaspomelosINDEC_12.setVisible(true);lyr_HectreassojaINDEC_13.setVisible(true);lyr_HectreasalgodnINDEC_14.setVisible(true);lyr_Localidades_15.setVisible(true);lyr_BERFormosa_16.setVisible(true);lyr_BERFormosa_17.setVisible(true);lyr_DelegacinFormosacapital_18.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PoblacinpordepartamentoINDEC_3,lyr_PEAINDEC_4,lyr_ViviendasruralesINDEC_5,lyr_CabezasporcinosMAGyP_6,lyr_CabezasovinosMAGyP_7,lyr_CabezascaprinosMAGyP_8,lyr_CabezasbovinosMAGyP_9,lyr_HectreasbananosINDEC_10,lyr_HectreashortalizasINDEC_11,lyr_HectreaspomelosINDEC_12,lyr_HectreassojaINDEC_13,lyr_HectreasalgodnINDEC_14,lyr_Localidades_15,lyr_BERFormosa_16,lyr_BERFormosa_17,lyr_DelegacinFormosacapital_18];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_PEAINDEC_4.set('fieldAliases', {'PEA': 'PEA', });
lyr_ViviendasruralesINDEC_5.set('fieldAliases', {'Viv. Rur': 'Viv. Rur', });
lyr_CabezasporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezascaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasbovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasbananosINDEC_10.set('fieldAliases', {'Banano': 'Banano', });
lyr_HectreashortalizasINDEC_11.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreaspomelosINDEC_12.set('fieldAliases', {'Pomelo': 'Pomelo', });
lyr_HectreassojaINDEC_13.set('fieldAliases', {'Soja': 'Soja', });
lyr_HectreasalgodnINDEC_14.set('fieldAliases', {'Algodon': 'Algodon', });
lyr_Localidades_15.set('fieldAliases', {'Localidad': 'Localidad', 'Personas': 'Personas', });
lyr_BERFormosa_16.set('fieldAliases', {'Num.': 'Num.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin.': 'Admin.', });
lyr_BERFormosa_17.set('fieldAliases', {'Num.': 'Num.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin.': 'Admin.', });
lyr_DelegacinFormosacapital_18.set('fieldAliases', {'Localidad': 'Localidad', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldImages', {'Poblacion': '', });
lyr_PEAINDEC_4.set('fieldImages', {'PEA': 'TextEdit', });
lyr_ViviendasruralesINDEC_5.set('fieldImages', {'Viv. Rur': '', });
lyr_CabezasporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasovinosMAGyP_7.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezascaprinosMAGyP_8.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasbovinosMAGyP_9.set('fieldImages', {'Bovinos': '', });
lyr_HectreasbananosINDEC_10.set('fieldImages', {'Banano': 'TextEdit', });
lyr_HectreashortalizasINDEC_11.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreaspomelosINDEC_12.set('fieldImages', {'Pomelo': 'TextEdit', });
lyr_HectreassojaINDEC_13.set('fieldImages', {'Soja': 'TextEdit', });
lyr_HectreasalgodnINDEC_14.set('fieldImages', {'Algodon': 'TextEdit', });
lyr_Localidades_15.set('fieldImages', {'Localidad': '', 'Personas': '', });
lyr_BERFormosa_16.set('fieldImages', {'Num.': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin.': 'TextEdit', });
lyr_BERFormosa_17.set('fieldImages', {'Num.': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin.': 'TextEdit', });
lyr_DelegacinFormosacapital_18.set('fieldImages', {'Localidad': '', 'Direccion': '', 'Prest 2016': '', 'Prest 2017': '', 'Prest 2018': '', 'Prest 2019': '', 'Prest 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'PEA': 'inline label', });
lyr_ViviendasruralesINDEC_5.set('fieldLabels', {'Viv. Rur': 'inline label', });
lyr_CabezasporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezascaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasbovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreasbananosINDEC_10.set('fieldLabels', {'Banano': 'inline label', });
lyr_HectreashortalizasINDEC_11.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreaspomelosINDEC_12.set('fieldLabels', {'Pomelo': 'inline label', });
lyr_HectreassojaINDEC_13.set('fieldLabels', {'Soja': 'inline label', });
lyr_HectreasalgodnINDEC_14.set('fieldLabels', {'Algodon': 'inline label', });
lyr_Localidades_15.set('fieldLabels', {'Localidad': 'inline label', 'Personas': 'inline label', });
lyr_BERFormosa_16.set('fieldLabels', {'Num.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin.': 'inline label', });
lyr_BERFormosa_17.set('fieldLabels', {'Num.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin.': 'inline label', });
lyr_DelegacinFormosacapital_18.set('fieldLabels', {'Localidad': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', });
lyr_DelegacinFormosacapital_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});