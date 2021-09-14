import Layout from "../components/layout";
import Image from "next/image";
function Profile() {
    return (
        <div>
                <h1 className="pl-2 text-gray-550 text-4xl border-l-8 border-purple-250 dark:text-white">About 장준민</h1>
                <Image src='/images/me.png'
                       className="rounded-full"
                       priority
                       width={130}
                       height={130}
                       alt="장준민"
                />
                <div>
                    <p className="pl-2 my-5 text-gray-550 text-xl border-l-8 border-purple-250 dark:text-white">저는 _____ 개발자 입니다.</p>
                    <ul>
                        <li className="text-gray-550 dark:text-gray-450 list-disc">될 때까지 포기하지 않는</li>
                        <li className="text-gray-550 dark:text-gray-450 list-disc">새로운 기술을 익히는 것을 두려워하지 않는</li>
                        <li className="text-gray-550 dark:text-gray-450 list-disc">끝 없이 만족하지 못하는</li>
                        <li className="text-gray-550 dark:text-gray-450 list-disc">공부한 것을 공유하는 걸 좋아하는</li>
                    </ul>
                    <p className="pl-2 my-5 text-gray-550 text-xl border-l-8 border-purple-250 dark:text-white">다룰 수 있는 기술 _____</p>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">React</code>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">Redux</code>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">Apollo Client/Server</code>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">MongoDB</code>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">Next</code>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">NodeJS/Express</code>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">Styled Components</code>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">GraphQL</code>

                    <p className="pl-2 my-5 text-black text-xl border-l-8 border-purple-250 dark:text-white">요즘 빠진 기술</p>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">Next</code>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">GraphQL</code>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">Apollo Client/Server</code>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">Recoil</code>
                    <code className="p-1.5 bg-purple-400 text-gray-550 rounded-xl inline-block ml-1.5 mt-2 dark:bg-purple-300 text-gray-450">TailWind CSS</code>
                </div>
        </div>

    )
}

export default Profile