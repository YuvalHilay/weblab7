angular.module('imageApp', [])
    .controller('imageController', function($scope) {
        // Generate image objects for main images and thumbnails
        const imageIds = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118];
        const imageSize = '500/500';
        const thumbnailSize = '50/50';

        $scope.images = imageIds.map(id => ({
            id: id,
            url: `https://picsum.photos/id/${id}/${imageSize}`,
            thumbnailUrl: `https://picsum.photos/id/${id}/${thumbnailSize}`
        }));

        $scope.selectedIndex = 0;
        $scope.selectedImage = $scope.images[0];

        $scope.selectImage = function(index) {
            $scope.selectedIndex = index;
            $scope.selectedImage = $scope.images[index];
        };

        $scope.nextImage = function() {
            $scope.selectedIndex = ($scope.selectedIndex + 1) % $scope.images.length;
            $scope.selectedImage = $scope.images[$scope.selectedIndex];
        };

        $scope.prevImage = function() {
            $scope.selectedIndex = ($scope.selectedIndex - 1 + $scope.images.length) % $scope.images.length;
            $scope.selectedImage = $scope.images[$scope.selectedIndex];
        };

        // Initialize with the first image of size 200/300
        $scope.selectedImage = {
            id: 101,
            url: 'https://picsum.photos/id/101/200/300',
            thumbnailUrl: 'https://picsum.photos/id/101/50/50'
        };
    });
