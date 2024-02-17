import {
    Alert,
    Linking,
    PermissionsAndroid,
    Platform
} from 'react-native';
import ReactNativeBlobUtil from "react-native-blob-util";
import DeviceInfo from 'react-native-device-info'
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';



const handleDownloadMedia = async (url) => {
    if (Platform.OS === 'ios') {
        // const downloadUrl = await downloadPDF(url);
        const downloadUrl = await downloadFile(url);
        return downloadUrl
    } else {
        try {
            const apiLevel = await DeviceInfo.getApiLevel()
            const PERM = apiLevel < 33 ?
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                :
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
            const granted = await PermissionsAndroid.request(
                PERM,
                {
                    title: 'Storage Permission Required',
                    message: 'Application needs access to your storage to download File',
                    buttonPositive: 'OK'
                }
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // Start downloading
                // const downloadUrl = await downloadPDF(url);
                const downloadUrl = await downloadFile(url);
                return downloadUrl
                console.log('Storage Permission Granted.');
            } else {
                // If permission denied then show alert
                Alert.alert('Error', 'Storage Permission Not Granted', [
                    {
                        text: 'Allow in settings',
                        onPress: () => Linking.openSettings(),
                    },
                ]);

            }
        } catch (err) {
            // To handle permission related exception
            console.log("++++" + err);
        }
    }
};

const getFileExtention = (fileUrl) => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ?
        /[^.]+$/.exec(fileUrl) : undefined;
};

const downloadFile = (fileUrl) => {
    return new Promise((resolve, reject) => {
        // Get today's date to add the time suffix in filename
        let date = new Date();
        // File URL which we want to download
        let FILE_URL = fileUrl;
        // Function to get extension of the file URL
        let file_ext = getFileExtention(FILE_URL);

        file_ext = '.' + 'pdf';

        // config: To get response by passing the downloading related options
        // fs: Root directory path to download 

        const { config, fs } = RNFetchBlob;

        let dirs = RNFetchBlob.fs.dirs;


        let path = Platform.OS === 'ios' ? dirs['MainBundleDir'] : RNFS.DownloadDirectoryPath

        let RootDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                path:
                    path +
                    '/report' +
                    file_ext,
                description: 'downloading file...',
                notification: true,
                // useDownloadManager works with Android only:)
                useDownloadManager: true,
            },
        };

        config(options)
            .fetch('GET', FILE_URL)
            .then((res) => {
                const path = Platform.OS === "ios" ? res.path() : "file://" + res.path()
                resolve(path);
            })
            .catch((error) => {
                // Reject with the error message
                reject(error);
            });
    });
};

const downloadPDF = async (pdfContent) => {
    let path = Platform.OS === 'ios' ? dirs['MainBundleDir'] : RNFS.DownloadDirectoryPath
    const downloadDest = `${path}/report.pdf`;
    const { config, fs } = ReactNativeBlobUtil;
    try {
        await fs.writeFile(downloadDest, pdfContent, 'base64');
        console.log('PDF downloaded to:', downloadDest);
        return true
    } catch (error) {
        console.error('Error downloading PDF:', error);
        return false
    }
}

export {
    downloadPDF,
    handleDownloadMedia,
};
