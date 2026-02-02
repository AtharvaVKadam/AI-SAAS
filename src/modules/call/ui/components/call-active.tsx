import Link from "next/link";   
import Image from "next/image";
import {
    CallControls,
    SpeakerLayout,
    StreamVideoParticipant,
} from "@stream-io/video-react-sdk"

interface Props {
    onLeave: () => void;
    meetingName: string;
};

export const CallActive = ({ onLeave, meetingName }: Props ) => {

    return(
        <div className="flex flex-col justify-between p-4 h-full text-white">
            <div className="bg-[#101213] rounded-full p-4 flex items-center gap-4">
                <Link href="/" className="flex items-center justify-center p-1 bg-white/10 rounded-full w-fit">
                    <Image src="/logo.svg" width={22} height={22} alt="Logo" style={{ height: 'auto' }} />
                </Link>
                <h4 className="text-base">
                    {meetingName}
                </h4>
            </div>
            <SpeakerLayout 
                VideoPlaceholder={({ participant }: { participant: StreamVideoParticipant }) => (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#19232d]">
                        <img 
                            src={participant.image || `https://avatar.vercel.sh/${participant.name}`}
                            alt={participant.name}
                            className="h-32 w-32 rounded-full object-cover border-4 border-[#2b3648] shadow-lg"
                        />
                        <span className="mt-4 text-lg font-semibold text-white">
                            {participant.name}
                        </span>
                    </div>
                )}
                PictureInPicturePlaceholder={() => null}
            />
            <div className="bg-[#101213] rounded-full px-4" >
                <CallControls onLeave={onLeave}/>
            </div>
        </div>
    )
}

