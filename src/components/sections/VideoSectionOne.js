import VideoPopup from "@/components/modal/VideoPopup";
import videoBg from "@/assets/images/video/01.jpg";

export default function VideoSectionOne() {
    return (
        <section className="video video-padding pt-130 pb-130" style={{ backgroundImage: `url(${videoBg.src})`}}>
            <div className="container">
                <VideoPopup />
            </div>
        </section>
    )
}