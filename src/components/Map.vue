<template>
    <div>
        <h1>Your Coordinates :</h1>
        <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>
        <GmapMap
            :center='center'
            :zoom='12'
            style='width:100%;  height: 400px;'
        ></GmapMap>
    </div>
</template>

<script>
export default {
    data() {
        return {
            coordinates: {
                lat: 0,
                lng: 0
            },
            center: { lat: 45.508, lng: -73.587 },
        }
    },
    mounted() {
        this.geolocate();
    },
    methods: {
        geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
            this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            };
        });
        },
    },
}
</script>