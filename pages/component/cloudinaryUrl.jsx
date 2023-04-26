import buildUrl from "cloudinary-build-url";

export default function (image, effects) {
    const param = {
        cloud: {
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
        }
    };

    return buildUrl(image, effects ? Object.assign(param, effects) : param)
}