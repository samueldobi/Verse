"use client";
import React, { useState, useEffect } from 'react';
// import ProtectedRoute from "@/components/protectedRoutes/protectedRoutes";
import { MessageCircle, Globe, Star, Clock, MapPin } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@/context/auth';
import { useRouter } from 'next/navigation';
export default function PairingPage() {
    const {currentUser} = useAuth(); 
    const userId = currentUser?.id; 
    const router = useRouter();
    // const [selectedMatch, setSelectedMatch] = useState<null | boolean>(null);
    const [matches, setMatches] = useState<unknown[]>([]);


useEffect(()=>{
    const fetchMatches = async () => {
     
    try {
      if(!userId) return;
      const res = await axios.get(
        `/api/users/${userId}/matches`
      );
      setMatches(res.data || []);
      if (!res?.data || res.data.length === 0) {
        console.warn("No matches found for user:", userId); 
        return;
      }

      console.log(res.data);
    } catch (err) {
      console.error("❌ Error fetching matches:", err);
    }
  };

  fetchMatches();
}, [userId]);





    const handleStartChat = async(matchId:string) => {
      if(!userId || !matchId){
        console.error("User ID or Match ID is missing.");
        return;
      }
      try{
          const user1_id = userId;
          const user2_id = matchId;
           console.log("Payload being sent:", { user1_id, user2_id });
          const res = await axios.post("/api/chats",{
            user1_id,
            user2_id
            
      });
      console.log("Chat Stared",res.data);
      router.push('/chat')
      }catch(err){ 
        console.error("Error starting chat:", err);
      }
      // route to the chat page
      router.push('/chat')
    }

  const getLevelColor = (level:string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };
  return (
    <>
       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Your Perfect Language Matches
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Connect with native speakers who want to learn your language
          </p>
        </div>

        {/* Matches Grid */}
        <div className="space-y-4">
          {matches.length == 0 ? (
            <div key="no-matches"
            className="text-center text-slate-600 dark:text-slate-400">
              <p className="text-lg mb-4">No matches found yet. Please check back later!</p>
              <div className="w-16 h-16 mx-auto border-4 border-dashed border-slate-300 dark:border-slate-600 rounded-full animate-pulse"></div>
            </div>
          ):(
            matches.map((match)=>(
              <div key={match.id}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all duration-300 hover:scale-[1.02]"
              >
                  <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative">
                  {/* <img
                    src={match.avatar}
                    alt={match.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700"
                  /> */}
                  <div className="absolute -top-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white dark:border-slate-800"></div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        {match.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <MapPin className="w-4 h-4" />
                        {/* <span>{match.location}</span> */}
                      </div>
                    </div>
                    
                    {/* Match Percentage */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {/* {match.matchPercentage}% Match */}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">Speaks: {match.speaks_language}</span>
                    </div>
                    <div className="text-slate-400">→</div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium">Learning: {match.learning_language}</span>
                    </div>
                  </div>

                  {/* Level and Rating */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(match.level)}`}>
                      {match.level}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {/* <span className="text-sm font-medium">{match.rating}</span> */}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4" />
                      {/* <span>{match.responseTime}</span> */}
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {/* {match.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-xs"
                        >
                          {interest}
                        </span>
                      ))} */}
                    </div>
                  </div>

                  {/* Action Button */}
                  
                  <button
                    onClick={() => handleStartChat(match.match_id)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Start Chatting
                  </button>
                </div>
              </div>
              </div>
            ))
          )}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-700/80 dark:hover:bg-slate-600/80 text-slate-700 dark:text-slate-300 rounded-xl font-medium transition-all duration-200">
            Load More Matches
          </button>
        </div>
      </div>
        </div>
    </>
   
  );
}