var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Sultra_Desa_1 = new ol.format.GeoJSON();
var features_Sultra_Desa_1 = format_Sultra_Desa_1.readFeatures(json_Sultra_Desa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sultra_Desa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sultra_Desa_1.addFeatures(features_Sultra_Desa_1);
var lyr_Sultra_Desa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sultra_Desa_1, 
                style: style_Sultra_Desa_1,
                popuplayertitle: "Sultra_Desa",
                interactive: true,
    title: 'Sultra_Desa<br />\
    <img src="styles/legend/Sultra_Desa_1_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Sultra_Desa_1_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Sultra_Desa_1_2.png" /> Klaster 3<br />\
    <img src="styles/legend/Sultra_Desa_1_3.png" /> Klaster 4<br />'
        });
var format_Kabupaten_2 = new ol.format.GeoJSON();
var features_Kabupaten_2 = format_Kabupaten_2.readFeatures(json_Kabupaten_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kabupaten_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kabupaten_2.addFeatures(features_Kabupaten_2);
var lyr_Kabupaten_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kabupaten_2, 
                style: style_Kabupaten_2,
                popuplayertitle: "Kabupaten",
                interactive: false,
                title: '<img src="styles/legend/Kabupaten_2.png" /> Kabupaten'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Sultra_Desa_1.setVisible(true);lyr_Kabupaten_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Sultra_Desa_1,lyr_Kabupaten_2];
lyr_Sultra_Desa_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM4_EN': 'ADM4_EN', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM4ALT1EN': 'ADM4ALT1EN', 'ADM4ALT2EN': 'ADM4ALT2EN', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Aktivitas.Ekonomi': 'Aktivitas.Ekonomi', 'Keterbangunan.Wilayah': 'Keterbangunan.Wilayah', 'Kehijauan.Wilayah': 'Kehijauan.Wilayah', 'Polusi.Udara': 'Polusi.Udara', 'Kesejahteraan.Sosial': 'Kesejahteraan.Sosial', 'Indeks Aktivitas Ekonomi': 'Indeks Aktivitas Ekonomi', 'Indeks Kualitas Lingkungan': 'Indeks Kualitas Lingkungan', 'Indeks Kesejahteraan Sosial': 'Indeks Kesejahteraan Sosial', 'Klaster': 'Klaster', });
lyr_Kabupaten_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Sultra_Desa_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM4_EN': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM4ALT1EN': 'TextEdit', 'ADM4ALT2EN': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Aktivitas.Ekonomi': 'TextEdit', 'Keterbangunan.Wilayah': 'TextEdit', 'Kehijauan.Wilayah': 'TextEdit', 'Polusi.Udara': 'TextEdit', 'Kesejahteraan.Sosial': 'TextEdit', 'Indeks Aktivitas Ekonomi': 'TextEdit', 'Indeks Kualitas Lingkungan': 'TextEdit', 'Indeks Kesejahteraan Sosial': 'TextEdit', 'Klaster': 'TextEdit', });
lyr_Kabupaten_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Sultra_Desa_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADM4_EN': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'ADM4_REF': 'hidden field', 'ADM4ALT1EN': 'hidden field', 'ADM4ALT2EN': 'hidden field', 'ADM3_EN': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'ADM2_EN': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM1_EN': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'Aktivitas.Ekonomi': 'inline label - visible with data', 'Keterbangunan.Wilayah': 'inline label - visible with data', 'Kehijauan.Wilayah': 'inline label - visible with data', 'Polusi.Udara': 'inline label - visible with data', 'Kesejahteraan.Sosial': 'inline label - visible with data', 'Indeks Aktivitas Ekonomi': 'inline label - visible with data', 'Indeks Kualitas Lingkungan': 'inline label - visible with data', 'Indeks Kesejahteraan Sosial': 'inline label - visible with data', 'Klaster': 'inline label - visible with data', });
lyr_Kabupaten_2.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADM2_EN': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM2_REF': 'hidden field', 'ADM2ALT1EN': 'hidden field', 'ADM2ALT2EN': 'hidden field', 'ADM1_EN': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Kabupaten_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});